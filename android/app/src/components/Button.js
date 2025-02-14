import { TouchableOpacity, Text,View } from "react-native";

export const CustomButton = (props) =>{
    const { textToShow,customStyle} = props;
    return(
        <View><TouchableOpacity
            style={[ customStyle]}
            {...props}
            >
                <Text>{textToShow}</Text>
                </TouchableOpacity>
         </View>
    )
}