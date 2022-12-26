import { TbError404 } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

const NotFound = ()=>{
    const navigate = useNavigate()
    const STYLE_NF = {
        paddingTop:'100px',
        width: '100%',
        height:'800px',
        backgroundColor:'rgb(248, 248, 252)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
    const STYLE_DIV = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
    return(
        <div style={STYLE_NF}>
            <div style={STYLE_DIV}>
                <TbError404 size={'200px'}/>
                <p>Trang không tồn tại</p>
                <button type="button" class="btn btn-primary" onClick={()=> navigate('/')}>Quay về trang chủ</button>
            </div>
        </div>
    )
}

export default NotFound