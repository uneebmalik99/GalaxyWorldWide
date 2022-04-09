import LocalizedStrings from 'react-native-localization'
import English from './English'
import Russian from './Russian'
import Arabic from './Arabic'



let strings = new LocalizedStrings({

    ar: Arabic,
    en: English,
    ru: Russian,
 
})

export { strings }