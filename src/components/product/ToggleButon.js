const ToggleButton = ({item})=>{
    const handleSelectWeightClick = (id,index,indexItem,e)=>{
        // arrActive[index][indexItem] = !arrActive[index][indexItem]
        // setActive(arrActive)
        // selectWeight({
        //     "index":index,
        //     "id":id
        // })
        // console.log(selectWeight)
    }
    return(
        <button
        >
        className={styles['name-classify']} 
        item={item.name}
        onClick={(e)=>handleSelectWeightClick(item.id,index,indexItem,e)}
        </button>
    )
    
}

export default ToggleButton