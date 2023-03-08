import './Result.scss';

export default function Result({ doc }) {
	const dateformat = (timestamp) => {
		const date = new Date(timestamp);
		const formatted = date.toDateString();
		return formatted;
	};
	return (
		<>
			<li className='result'>
				<h3 className='result__name'>{doc.file_name}</h3>
				<p className='result__author'>By: {doc.author}</p>
				<p className='result__info'>
					Created: {dateformat(doc.date_created)} / Modified: {dateformat(doc.date_modified)}
				</p>
                <p className="result__info">Location: {doc.file_storage_system}</p>
                <p className="result__info">Path: {doc.file_path}</p>
                <span>Tags: <ul className="result__tags">{doc.tags.map((tag)=><li className="result__tag">{tag} </li>)}</ul></span>
                

			</li>
		</>
	);
}
