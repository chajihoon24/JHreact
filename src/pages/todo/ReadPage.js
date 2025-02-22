import { useCallback } from "react";
import { useNavigate, useParams, useSearchParams, createSearchParams } from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";



const ReadPage = () => {
    const { tno } = useParams();

    const navigate = useNavigate()

    const [queryParams] = useSearchParams();
    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10
    const queryStr = createSearchParams({ page, size }).toString()   // 쿼리 유지


    const moveToModify = useCallback((tno) => {
        navigate({
            pathname: `/todo/modify/${tno}`,
            search: queryStr
        })
    }, [tno, page, size])



    const moveToList = useCallback(() => {
        navigate({
            pathname: `/todo/list`,
            search: queryStr
        })
    }, [page, size])
    return (
        <div className="font-extrabold w-full bg-white mt-6">
            <div className="text-2xl">
                Todo Read Page Component {tno}

                <ReadComponent tno={tno}></ReadComponent>
                <div className="flex justify-end p-4">

                    <button type="button" className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500" onClick={() => moveToModify(tno)}>Modify</button>
                    <button type="button" className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500" onClick={() => moveToList()}>List</button>
                </div>
            </div>
        </div>
    )
}

export default ReadPage;