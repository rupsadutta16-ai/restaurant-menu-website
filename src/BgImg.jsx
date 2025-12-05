import imageUrl from './assets/bgimg.png';
function Bgimg() {
    return(
        <>
        <div style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        filter: 'opacity(5%)',
        width: '100%',
        minHeight: '100vh',
        position: 'fixed',
        top: 0,
        left:0,
        zIndex: 0,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        }}></div>
        </>
    )
}
export default Bgimg;