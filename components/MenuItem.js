import * as React from "react";
import { Text,View,ScrollView } from "react-native";

const menuItemtoDisplay=[
    'Humus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta', 
];

const MenuItems=()=>{
    return(
        <View style={{flex:0.75}}>
            <ScrollView 
            style={{
                paddingHorizontal: 40,
                paddingVertical: 40,
                backgroundColor: "black",
            }}
            >
                <Text style={{ color: 'white', fontSize: 40, flexWrap: 'wrap' }}>
                    View Menu
                </Text>
                <Text style={{ color: '#F4CE14', fontSize: 36 }}>
                    {menuItemtoDisplay[0]}
                </Text>   
            </ScrollView>
        </View>
    );
};

export default MenuItems;