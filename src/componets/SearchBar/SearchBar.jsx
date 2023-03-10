import './SearchBar.scss'
import '../../styles/partials/_mixins.scss'
import '../../styles/partials/_variables.scss'
import logo from '../../assets/logo.png'

export default function SearchBar ({search, setSearch, handelSearchSubmit}) {

    return (
        <>
            <header className="header">
                <div className="header__logo">
                    <img className='header__logo-img' src={logo} alt="CanTech Logo" />
                </div>
                <form className='header__search' onSubmit={handelSearchSubmit}>
                    <button className='header__btn' type="submit"></button>
                    <input className='header__input' type="text" placeholder='Search...' name='search' id='search' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                </form>
                <div className="header__account">
                    <div className="header__name">Ash Jones</div>
                    <div className="header__initials">AJ</div>
                </div>
            </header>
        </>
    );
}