import headshotDemo from '../assets/images/headshotDemo.png'

export default function Home() {
    return (
        <div className="homePage">
            <div className="intro">
                <div className="leftDiv">
                    <h1 className='heroText'>
                        UX/UI Designer
                    </h1>
                    <h1 className='heroText'>
                        Full-Stack Web Developer
                    </h1>
                    <h1 className='heroText'>
                        Product Manager
                    </h1>
                    <p className='heroTitle'>
                        Bridging Design, Development, and Product Management, I bring a unique blend of skills to contribute as a valuable asset to any project, company or team.                                       
                    </p>
                </div>
                <div className="rightDiv">
                    <img src={headshotDemo} alt="headshot" />
                    <div className='buttonContainers'>
                        <div className='contactSection'>
                            <svg className='contactIcon importedIcon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.0744 9.46229C2.424 9.73529 2.0203 10.2213 2.0142 10.9093C2.01 11.3903 2.3346 12.0363 2.985 12.3003C3.2529 12.4093 7.0144 12.9153 7.0144 12.9153C7.0144 12.9153 8.01 16.0623 8.3688 17.1683C8.4727 17.4883 8.5319 17.6453 8.7599 17.8543C9.1467 18.2083 9.8006 18.0973 10.0834 17.8133C10.8316 17.0633 12.0142 15.9063 12.0142 15.9063L12.5119 16.3113C12.5119 16.3113 14.722 18.0743 15.9301 18.9043C16.6414 19.3933 17.1351 19.9033 17.9357 19.9063C18.3435 19.9083 18.9976 19.7053 19.43 19.2103C19.7157 18.8833 19.899 18.3603 19.9699 17.8913C20.1311 16.8263 22.0222 5.31029 22.0142 4.90729C22.0014 4.26429 21.4605 3.90228 21.0109 3.90628C20.7285 3.90928 20.4958 3.99129 19.978 4.14929C15.9726 5.3723 3.3397 9.35129 3.0744 9.46229ZM18.0142 6.90629C18.0142 6.90629 12.7362 11.5003 10.6271 13.6143C9.9514 14.2913 9.9037 15.4533 9.9037 15.4533L8.8135 11.9653L18.0142 6.90629Z" fill="white"/>
                            </svg>
                            <button className='contactButton'>
                                Contact
                            </button>
                        </div>
                        <div className='portfolioSection'>
                            <svg className='portfolioIcon importedIcon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.99854 2.99121C4.34154 2.99121 2.99854 4.33431 2.99854 5.99121V7.99121V16.9912C2.99854 19.2002 4.78954 20.9912 6.99854 20.9912H16.9986C19.2076 20.9912 20.9986 19.2002 20.9986 16.9912V7.99121C20.9986 7.43891 20.5506 6.99121 19.9986 6.99121C19.9986 6.99121 17.0956 6.99121 14.9986 6.99121C14.2436 6.99121 14.0006 6.74631 13.4046 5.55371C12.5016 3.74631 11.7435 2.99121 9.99855 2.99121H5.99854ZM5.99854 4.99121H9.99855C10.7535 4.99121 10.9965 5.23611 11.5925 6.42871C11.7225 6.68981 11.7726 6.77481 11.9006 6.99291C8.45455 6.99291 5.98354 6.99121 4.99854 6.99121V5.99121C4.99854 5.43891 5.44654 4.99121 5.99854 4.99121Z" fill="white"/>
                            </svg>
                            <button className='portfolioButton'>
                                Portfolio
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio">
                <h1>
                    Portfolio
                </h1>
            </div>
            <div className="blog">
                <h1>
                    Blog
                </h1>
            </div>
        </div>
        
    )
}