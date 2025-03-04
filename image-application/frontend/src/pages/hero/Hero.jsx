import './hero.css'

const Hero = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="bg-dark col-3">
                    <h2 className="text-white-50 p-3 mb-4">Dashboard</h2>
                    <p className='text-white p-3'>welcome, dear user to image4you</p>
                </div>
                <div className="bg-primary col-9">
                    <br /><br /><br /><br />
                    <h2 id="hero" className="text-light mb-4 text-center">Lets start Discovering</h2>
                    
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <input 
                            type="text"
                            placeholder="search user library"
                            className="form-control p-2 container bg-light border"
                            />
                        </div>
                        <div className="col-lg-8"></div>
                    </div>
                    <br /><br /><br /><br /><br /><br />
                </div>
            </div>
        </div>
    )
}

export default Hero;