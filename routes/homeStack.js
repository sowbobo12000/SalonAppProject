import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ProfileType from '../components/ProfileType';
import PhoneInput from '../components/PhoneInput';
import SelectState from '../components/SelectState';
import CountryPicker from '../components/CountryPicker';
import UploadCertificate from '../components/UploadCertificate';
import CountryPicker2 from '../components/CountryPicker2';
import EditProfileScreen from '../components/EditProfileScreen';

const screens = {
        PhoneInput:  PhoneInput,
        ProfileType: ProfileType,
        SelectState: SelectState,
        CountryPicker: CountryPicker,
        UploadCertificate: UploadCertificate,
        CountryPicker2: CountryPicker2,
        EditProfileScreen: EditProfileScreen
    
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack)