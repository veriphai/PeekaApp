import React, { useState } from 'react';
import { View, Switch, } from 'react-native';


function AppSwitch(props) {

    const [isnew, setIsnew] = useState(false)
    return (
        <View>
            <Switch value={isnew} onValueChange={(newvalue) => setIsnew(newvalue)} />
        </View>
    );
}

export default AppSwitch;