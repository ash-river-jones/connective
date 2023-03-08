import './ResultsCard.scss';
import '../../styles/partials/_mixins.scss';
import '../../styles/partials/_variables.scss';

import Result from '../Result/Result';

export default function ResultsCard({ filteredDocs }) {
	return (
		<>
			<h2 className='results__title'>Search Results</h2>
			<ul className='results__list'>
				{filteredDocs.map((doc) => (
					<Result key={doc.id} doc={doc} />
				))}
			</ul>
		</>
	);
}
