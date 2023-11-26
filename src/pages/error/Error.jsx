import errorImg from '../../assets/404.gif'
const Error = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={errorImg} alt="" />
            </div>
        </div>
    );
};

export default Error;