import Wrapper from '../assets/styles/StatsItem';

function StatsItem({ count, title, icon, color, bcg }) {
    return (
        <Wrapper color={color} bcg={bcg}>
            <header>
                <span className='count'>{count}</span>
                <span className='icon'>{icon}</span>
            </header>
            <h5 className='title'>{title}</h5>
        </Wrapper>
    );
}

export default StatsItem;