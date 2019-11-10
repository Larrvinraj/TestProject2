import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const styles = {
    container:{
        flex: 1, 
        backgroundColor: '#fff'
    },
    topBarContainer:{
        height: '5%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#ff0000'
    },
    topBartext:{
        color: '#fff',
         fontSize: moderateScale(12,0.1)
    },
    topSectionIndicatorContainer:{
        height: '20%', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    topSectionContentContainer:{
        height: verticalScale(150), 
        alignItems: 'center',
        justifyContent: 'center'
    },
    topSectionDateText:{
        fontSize: moderateScale(15,0.1), 
        color: '#000', 
        fontWeight: 'bold'
    },
    topSectionTempText:{
        fontSize: moderateScale(45,0.1), 
        color: '#000', 
        fontWeight: 'bold',
        paddingTop:5
    },
    topSectionWeatherText:{
        fontSize: moderateScale(15,0.1), 
        color: '#a9a9a9'
    },
    eachSectionContainer:{
        flexDirection: 'row', 
        height: verticalScale(80), 
        justifyContent: 'space-between', 
        paddingVertical: moderateScale(15,0.1), 
        paddingLeft: moderateScale(15,0.1), 
        paddingRight: moderateScale(18,0.1)
    },
    eachSectionTextContainer:{
        justifyContent: 'center'
    },
    eachSectionDateText:{
        color:'#000',
        fontWeight:'bold',
        fontSize:moderateScale(15,0.1)
    },
    eachSectionTempText:{
        color:'#000',
        fontSize:moderateScale(15,0.1)
    },
    eachSectionWeatherText:{
        color:'#a9a9a9',
        fontSize:moderateScale(15,0.1)
    },
    eachSectionArrowContainer:{
        justifyContent: 'center'
    },
    eachSectionDivider:{
        backgroundColor: '#e5e5e5',
        height:moderateScale(1,0.1),
        marginTop:moderateScale(10,0.1)
    }
};
