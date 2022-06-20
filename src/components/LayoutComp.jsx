const LayoutComp = () => {
 
    const TableData = (
        <table>
            <tr>
                <th>
                   <h2> This is heading!</h2>
                </th>
            </tr>
            <tr>
                <td>
                   data
                </td>
            </tr>
        </table>
    )


    const Text = (
        <input type='text' placeholder="Enter Text Here">
           
        </input>
    )

    const Image = (
         <img  src="#" alt="" height='' width = ''/>
    )

    const Separator = (
        <hr></hr>
    )

    const youtube = (
        <p>Youtube Comp</p>
    )

    const layoutM = (
        <p>Layout Comp</p>
    )

    const Quote = (
        <p>This is quotes page</p>
    )

    const InternationalVChart =(
        <p>Internation Chart</p>
    )




    return(
        <>
          <p style={{textAlign : 'center'}}>This is a layout page!</p>
        </>
    )
}


export default LayoutComp;