import './Search.scss';

import documentData from '../../data/mockDocumentData.json';

import SearchBar from '../../componets/SearchBar/SearchBar';
import ResultsCard from '../../componets/ResultsCard/ResultsCard';

import { useEffect, useState } from 'react';

export default function Search() {
	const [search, setSearch] = useState('');
	const [docData, setDocData] = useState(documentData);
	const [filteredDocs, setFilteredDocs] = useState([]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			let searchParam = search.toLowerCase();
			setFilteredDocs(
				docData.filter(
					(document) =>
						(document.file_storage_system && document.file_storage_system.toLowerCase().includes(searchParam)) ||
						(document.file_name && document.file_name.toLowerCase().includes(searchParam)) ||
						(document.author && document.author.toLowerCase().includes(searchParam)) ||
						(document.tags[0] && document.tags[0].toLowerCase().includes(searchParam)) ||
						(document.tags[1] && document.tags[1].toLowerCase().includes(searchParam)) ||
						(document.tags[2] && document.tags[2].toLowerCase().includes(searchParam)) ||
						(document.tags[3] && document.tags[3].toLowerCase().includes(searchParam)) ||
						(document.tags[4] && document.tags[4].toLowerCase().includes(searchParam))
				)
			);
		}, 1000);
		return () => clearTimeout(timeout);
	}, [search]);

	const handelSearchSubmit = (event) => {
		event.preventDefault();

		console.log(event.target.search.value);

		event.target.search.value = '';
	};

	return (
		<>
			<SearchBar search={search} setSearch={setSearch} handelSearchSubmit={handelSearchSubmit} />
			{search && <ResultsCard docData={docData} search={search} filteredDocs={filteredDocs} />}
		</>
	);
}
