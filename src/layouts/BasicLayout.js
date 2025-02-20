import Top from "./Top";


const BasicLayout = ({ children }) => {
    return (
            
            <div className="mx-auto">
            <Top></Top>
            <div className="max-w-screen-2xl mx-auto bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40 my-5">
                <main>{children}</main>
            </div>
            </div>


    )

};

export default BasicLayout;