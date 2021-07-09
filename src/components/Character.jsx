
import Cards from './Cards';
import {Box, Grid} from '@material-ui/core'

const Character = ({ data }) => {
    return (
        <Box style={{margin:20}}>
            <Grid container spacing={4} >

            {
                data.map(item => (
                    <Grid item xs={3} >

                        {/* console.log(item); */}
                        <Cards item={item} key={item.char_id} />
                    </Grid>
                ))
            }
            </Grid>
        </Box>
    )
}

export default Character;