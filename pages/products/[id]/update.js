import { useState, useRef } from 'react';
import styles from '../../../styles/Create.module.css';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import {useRouter} from 'next/router';

const UpdateCard = ({post}) => {
	const router = useRouter()
	const editorRef = useRef(null);
	const [files, setFiles] = useState('');

	const [values, setValues] = useState({
		_id: post._id,
		title: post.title,
		image: post.image,
		desc: post.desc,
		price: post.price,
		category: post.category
	})

	const {
		_id,
		title,
		image,
		price,
		desc,
		category
	} = values;

	const handleChange = e => {
		setValues({...values, [e.target.name]:e.target.value});
	}

	const handleClick = async () => {
		const formData = new FormData();
		formData.append('file', files);
		formData.append('upload_preset', 'hamzawy');
		const upload = await axios.post('https://api.cloudinary.com/v1_1/elselly/image/upload', formData);
		const {url} = upload.data;
		console.log(url)
		desc = editorRef.current.getContent();
		const urlCreate = 'http://localhost:3000/api/products';
		const res = await axios.put(`${urlCreate}/${_id}/update`, {
			title,
			price,
			desc,
			image: url,
			category
		});

		router.push(`/products/${res.data._id}`);
	}

	return(
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h3>Update {post.title}</h3>
				<div className={styles.item}>
						<label className={styles.label}>Title</label>
						<input 
							className={styles.input}
							type='text' 
							name='title'
							value={title}
							onChange={handleChange}
						/>
					</div>
					<div className={styles.item}>
						<label className={styles.label}>Image</label>
						<input 
							className={styles.input}
							type='file' 
							onChange={e => setFiles(e.target.files[0])}
						/>
						<img width={100} height={100} src={image} alt={title} />
					</div>
					<div className={styles.item}>
						<label className={styles.label}>Description</label>
						
						<Editor
						apiKey='0xzgp06wpyy2lrtsevxwhxcuasz3cs4rlxdjul1tzo810e78'
							onInit={(evt, editor) => editorRef.current = editor}
							initialValue={!desc ? "" : desc}
							// value={}
							// onChange={handleEditorChange}
							init={{
								height: 500,
								menubar: false,
								plugins: [
									'advlist autolink lists link image charmap print preview anchor',
									'searchreplace visualblocks code fullscreen',
									'insertdatetime media table paste code help wordcount'
								],
								toolbar: 'undo redo | formatselect | ' +
								'bold italic backcolor | alignleft aligncenter ' +
								'alignright alignjustify | bullist numlist outdent indent | ' +
								'removeformat | help',
								content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
							}}
						/>
					</div>
					<div className={styles.item}>
						<label className={styles.label}>Price</label>
						<input 
							className={styles.input}
							type='number' 
							name='price'
							value={price}
							onChange={handleChange}
						/>
					</div>
					
					<div className={styles.item}>
						<label className={styles.label}>Category</label>
						<input 
							className={styles.input}
							type='text' 
							name='category'
							value={category}
							onChange={handleChange}
						/>
					</div>
					<button onClick={handleClick} className={styles.btn}>Submit</button>

			</div>
		</div>
	)
}

export const getServerSideProps = async ctx => {
	const url = 'http://localhost:3000/api/products'
	const res = await axios.get(`${url}/${ctx.query.id}`);

	return {
		props: {
			post: res.data
		}
	}
}

export default UpdateCard;