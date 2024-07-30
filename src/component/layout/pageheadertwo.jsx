function PageHeaderTwo(){
    return(
        <div>
            <section className="pageheader-section" style={{backgroundImage: "url(/pageheader/bg.jpg)"}}>
                <div className="container">
                    <div className="section-wrapper text-center text-uppercase">
                        <div className="pageheader-thumb mb-4">
                            <img src="team/1.png" alt="team" />
                        </div>
                        <h2 className="pageheader-title">Dragon Details</h2>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PageHeaderTwo;