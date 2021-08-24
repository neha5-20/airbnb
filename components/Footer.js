function Footer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-20 py-8 border-t-2 bg-gray-100">
            <div className="space-y-4 text-sm text-gray-800">
               <h5 className="font-bold">ABOUT</h5>
               <p>How Airbnb works</p>
               <p>Newsroom</p>
               <p>Investors</p>
               <p>Airbnb Plus</p>
               <p>Airbnb Luxe</p>
            </div>
            <hr className="md:hidden border-t-2"/>
            <div className="space-y-4 text-sm text-gray-800">
               <h5 className="font-bold">COMMUNITY</h5>
               <p>Diversity & Belonging</p>
               <p>Accessibility</p>
               <p>Airbnb Associates</p>
               <p>Frontline Stays</p>
               <p>Airbnb.org</p>
            </div>
            <hr className="md:hidden border-t-2 "/>
            <div className="space-y-4 text-sm text-gray-800 ">
               <h5 className="font-bold">HOST</h5>
               <p>Host your home</p>
               <p>Host an Online Experience</p>
               <p>Host an Experience</p>
               <p>Responsible hosting</p>
               <p>Community Centre</p>
            </div>
            <hr className="md:hidden border-t-2"/>
            <div className="space-y-4 text-sm text-gray-800">
               <h5 className="font-bold">SUPPORT</h5>
               <p>Our COVID-19 Response</p>
               <p>Help Centre</p>
               <p>Cancellation options</p>
               <p>Neighbourhood Support</p>
               <p>Trust & Safety</p>
            </div>
            <hr className="md:hidden border-t-2 "/>
            <div className="space-y-4 text-sm text-gray-800">
                <div className="md:grid grid-cols-2">
                    <p>© 2021 Airbnb, Inc.</p>
                    <div className="flex flex-grow space-x-3">
                       <p>Privacy</p>
                       <p>Terms</p>
                       <p>Sitemap</p>
                       <p>Company</p>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Footer
