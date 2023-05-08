import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import CurrencyAPI from '@everapi/currencyapi-js';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Main() {
    const currencyApi = new CurrencyAPI('yFKqwC7WPEpPDG8wvbtnGslK1Wv9OrRsdnafmgMJ');
    function convert() {
        currencyApi.latest({
            base_currency: value,
            currencies: value2
        }).then(response => {
            console.log(response);
            setOutputCurrencyValue(response.data[value2].value);
            let datas = response.data;
            console.log(response.data[value2].value);
        });
    }

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
        { label: 'United Arab Emirates Dirham', value: 'AED' },
        { label: 'Afghan Afghani', value: 'AFN' },
        { label: 'Albanian Lek', value: 'ALL' },
        { label: 'Armenian Dram', value: 'AMD' },
        { label: 'NL Antillean Guilder', value: 'ANG' },
        { label: 'Angolan Kwanza', value: 'AOA' },
        { label: 'Argentine Peso', value: 'ARS' },
        { label: 'Australian Dollar', value: 'AUD' },
        { label: 'Aruban Florin', value: 'AWG' },
        { label: 'Azerbaijani Manat', value: 'AZN' },
        { label: 'Bosnia-Herzegovina Convertible Mark', value: 'BAM' },
        { label: 'Barbadian Dollar', value: 'BBD' },
        { label: 'Bangladeshi Taka', value: 'BDT' },
        { label: 'Bulgarian Lev', value: 'BGN' },
        { label: 'Bahraini Dinar', value: 'BHD' },
        { label: 'Burundian Franc', value: 'BIF' },
        { label: 'Bermudan Dollar', value: 'BMD' },
        { label: 'Brunei Dollar', value: 'BND' },
        { label: 'Bolivian Boliviano', value: 'BOB' },
        { label: 'Brazilian Real', value: 'BRL' },
        { label: 'Bahamian Dollar', value: 'BSD' },
        { label: 'Bhutanese Ngultrum', value: 'BTN' },
        { label: 'Botswanan Pula', value: 'BWP' },
        { label: 'Belarusian ruble', value: 'BYN' },
        { label: 'Belarusian Ruble', value: 'BYR' },
        { label: 'Belize Dollar', value: 'BZD' },
        { label: 'Canadian Dollar', value: 'CAD' },
        { label: 'Congolese Franc', value: 'CDF' },
        { label: 'Swiss Franc', value: 'CHF' },
        { label: 'Unidad de Fomento', value: 'CLF' },
        { label: 'Chilean Peso', value: 'CLP' },
        { label: 'Chinese Yuan', value: 'CNY' },
        { label: 'Coombian Peso', value: 'COP' },
        { label: 'Costa Rican Colón', value: 'CRC' },
        { label: 'Cuban Convertible Peso', value: 'CUC' },
        { label: 'Cuban Peso', value: 'CUP' },
        { label: 'Cape Verdean Escudo', value: 'CVE' },
        { label: 'Czech Republic Koruna', value: 'CZK' },
        { label: 'Djiboutian Franc', value: 'DJF' },
        { label: 'Danish Krone', value: 'DKK' },
        { label: 'Dominican Peso', value: 'DOP' },
        { label: 'Algerian Dinar', value: 'DZD' },
        { label: 'Egyptian Pound', value: 'EGP' },
        { label: 'Eritrean Nakfa', value: 'ERN' },
        { label: 'Ethiopian Birr', value: 'ETB' },
        { label: 'Euro', value: 'EUR' },
        { label: 'Fijian Dollar', value: 'FJD' },
        { label: 'Falkland Islands Pound', value: 'FKP' },
        { label: 'British Pound Sterling', value: 'GBP' },
        { label: 'Georgian Lari', value: 'GEL' },
        { label: 'Guernsey pound', value: 'GGP' },
        { label: 'Ghanaian Cedi', value: 'GHS' },
        { label: 'Gibraltar Pound', value: 'GIP' },
        { label: 'Gambian Dalasi', value: 'GMD' },
        { label: 'Guinean Franc', value: 'GNF' },
        { label: 'Guatemalan Quetzal', value: 'GTQ' },
        { label: 'Guyanaese Dollar', value: 'GYD' },
        { label: 'Hong Kong Dollar', value: 'HKD' },
        { label: 'Honduran Lempira', value: 'HNL' },
        { label: 'Croatian Kuna', value: 'HRK' },
        { label: 'Haitian Gourde', value: 'HTG' },
        { label: 'Hungarian Forint', value: 'HUF' },
        { label: 'Indonesian Rupiah', value: 'IDR' },
        { label: 'Israeli New Sheqel', value: 'ILS' },
        { label: 'Manx pound', value: 'IMP' },
        { label: 'Indian Rupee', value: 'INR' },
        { label: 'Iraqi Dinar', value: 'IQD' },
        { label: 'Iranian Rial', value: 'IRR' },
        { label: 'Icelandic Króna', value: 'ISK' },
        { label: 'Jersey pound', value: 'JEP' },
        { label: 'Jamaican Dollar', value: 'JMD' },
        { label: 'Jordanian Dinar', value: 'JOD' },
        { label: 'Japanese Yen', value: 'JPY' },
        { label: 'Kenyan Shilling', value: 'KES' },
        { label: 'Kyrgystani Som', value: 'KGS' },
        { label: 'Cambodian Riel', value: 'KHR' },
        { label: 'Comorian Franc', value: 'KMF' },
        { label: 'North Korean Won', value: 'KPW' },
        { label: 'South Korean Won', value: 'KRW' },
        { label: 'Kuwaiti Dinar', value: 'KWD' },
        { label: 'Cayman Islands Dollar', value: 'KYD' },
        { label: 'Kazakhstani Tenge', value: 'KZT' },
        { label: 'Laotian Kip', value: 'LAK' },
        { label: 'Lebanese Pound', value: 'LBP' },
        { label: 'Sri Lankan Rupee', value: 'LKR' },
        { label: 'Liberian Dollar', value: 'LRD' },
        { label: 'Lesotho Loti', value: 'LSL' },
        { label: 'Lithuanian Litas', value: 'LTL' },
        { label: 'Latvian Lats', value: 'LVL' },
        { label: 'Libyan Dinar', value: 'LYD' },
        { label: 'Moroccan Dirham', value: 'MAD' },
        { label: 'Moldovan Leu', value: 'MDL' },
        { label: 'Malagasy Ariary', value: 'MGA' },
        { label: 'Macedonian Denar', value: 'MKD' },
        { label: 'Myanma Kyat', value: 'MMK' },
        { label: 'Mongolian Tugrik', value: 'MNT' },
        { label: 'Macanese Pataca', value: 'MOP' },
        { label: 'Mauritanian ouguiya', value: 'MRO' },
        { label: 'Mauritian Rupee', value: 'MUR' },
        { label: 'Maldivian Rufiyaa', value: 'MVR' },
        { label: 'Malawian Kwacha', value: 'MWK' },
        { label: 'Mexican Peso', value: 'MXN' },
        { label: 'Malaysian Ringgit', value: 'MYR' },
        { label: 'Mozambican Metical', value: 'MZN' },
        { label: 'Namibian Dollar', value: 'NAD' },
        { label: 'Nigerian Naira', value: 'NGN' },
        { label: 'Nicaraguan Córdoba', value: 'NIO' },
        { label: 'Norwegian Krone', value: 'NOK' },
        { label: 'Nepalese Rupee', value: 'NPR' },
        { label: 'New Zealand Dollar', value: 'NZD' },
        { label: 'Omani Rial', value: 'OMR' },
        { label: 'Panamanian Balboa', value: 'PAB' },
        { label: 'Peruvian Nuevo Sol', value: 'PEN' },
        { label: 'Papua New Guinean Kina', value: 'PGK' },
        { label: 'Philippine Peso', value: 'PHP' },
        { label: 'Pakistani Rupee', value: 'PKR' },
        { label: 'Polish Zloty', value: 'PLN' },
        { label: 'Paraguayan Guarani', value: 'PYG' },
        { label: 'Qatari Rial', value: 'QAR' },
        { label: 'Romanian Leu', value: 'RON' },
        { label: 'Serbian Dinar', value: 'RSD' },
        { label: 'Russian Ruble', value: 'RUB' },
        { label: 'Rwandan Franc', value: 'RWF' },
        { label: 'Saudi Riyal', value: 'SAR' },
        { label: 'Solomon Islands Dollar', value: 'SBD' },
        { label: 'Seychellois Rupee', value: 'SCR' },
        { label: 'Sudanese Pound', value: 'SDG' },
        { label: 'Swedish Krona', value: 'SEK' },
        { label: 'Singapore Dollar', value: 'SGD' },
        { label: 'Saint Helena Pound', value: 'SHP' },
        { label: 'Sierra Leonean Leone', value: 'SLL' },
        { label: 'Somali Shilling', value: 'SOS' },
        { label: 'Surinamese Dollar', value: 'SRD' },
        { label: 'São Tomé and Príncipe dobra', value: 'STD' },
        { label: 'Salvadoran Colón', value: 'SVC' },
        { label: 'Syrian Pound', value: 'SYP' },
        { label: 'Swazi Lilangeni', value: 'SZL' },
        { label: 'Thai Baht', value: 'THB' },
        { label: 'Tajikistani Somoni', value: 'TJS' },
        { label: 'Turkmenistani Manat', value: 'TMT' },
        { label: 'Tunisian Dinar', value: 'TND' },
        { label: 'Tongan Paʻanga', value: 'TOP' },
        { label: 'Turkish Lira', value: 'TRY' },
        { label: 'Trinidad and Tobago Dollar', value: 'TTD' },
        { label: 'New Taiwan Dollar', value: 'TWD' },
        { label: 'Tanzanian Shilling', value: 'TZS' },
        { label: 'Ukrainian Hryvnia', value: 'UAH' },
        { label: 'Ugandan Shilling', value: 'UGX' },
        { label: 'US Dollar', value: 'USD' },
        { label: 'Uruguayan Peso', value: 'UYU' },
        { label: 'Uzbekistan Som', value: 'UZS' },
        { label: 'Venezuelan Bolívar', value: 'VEF' },
        { label: 'Vietnamese Dong', value: 'VND' },
        { label: 'Vanuatu Vatu', value: 'VUV' },
        { label: 'Samoan Tala', value: 'WST' },
        { label: 'CFA Franc BEAC', value: 'XAF' },
        { label: 'Silver Ounce', value: 'XAG' },
        { label: 'Gold Ounce', value: 'XAU' },
        { label: 'East Caribbean Dollar', value: 'XCD' },
        { label: 'Special drawing rights', value: 'XDR' },
        { label: 'CFA Franc BCEAO', value: 'XOF' },
        { label: 'CFP Franc', value: 'XPF' },
        { label: 'Yemeni Rial', value: 'YER' },
        { label: 'South African Rand', value: 'ZAR' },
        { label: 'Zambian Kwacha', value: 'ZMK' },
        { label: 'Zambian Kwacha', value: 'ZMW' },
        { label: 'Zimbabwean dollar', value: 'ZWL' },
        { label: 'Bitcoin', value: 'BTC' },
        { label: 'Ethereum', value: 'ETH' },
        { label: 'Binance', value: 'BNB' },
        { label: 'Ripple', value: 'XRP' },
        { label: 'Solana', value: 'SOL' },
        { label: 'Polkadot', value: 'DOT' },
        { label: 'Avalanche', value: 'AVAX' },
        { label: 'Matic Token', value: 'MATIC' },
        { label: 'Litecoin', value: 'LTC' },
        { label: 'Cardano', value: 'ADA' },
    ]);
    const [open2, setOpen2] = React.useState(false);
    const [value2, setValue2] = React.useState(null);

    const [inputCurrencyValue, setInputCurrencyValue] = React.useState(0);
    const [outputCurrencyValue, setOutputCurrencyValue] = React.useState(0);
    const [result, setResult] = React.useState(0);

    function swapCurrency() {
        let temp = value;
        setValue(value2);
        setValue2(temp);
        convert();

        let temp2 = inputCurrencyValue;
        setInputCurrencyValue(result);
        setResult(temp2);
    }

    function calculate(val) {
        setResult(Math.round(val * outputCurrencyValue * 100) / 100);
    }

    return (
        <SafeAreaView>
            <Text style={styles.heading}>Currency Converter App</Text>
            <View style={{ width: 300, alignSelf: 'center' }}
            >
                <DropDownPicker
                    open={open}
                    onOpen={() => setOpen2(false)}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder='Select Source Currency'
                    searchablePlaceholder="Search Currency"
                    searchable={true}
                    listMode="SCROLLVIEW"
                    scrollViewProps={{
                        nestedScrollEnabled: true,
                    }}
                    dropDownContainerStyle={{
                        position: 'relative',
                        top: 0,
                    }}
                />
            </View>
            <TouchableOpacity onPress={swapCurrency}>
                <Image
                    source={require('../assets/images/ExchangeImage.png')}
                    style={{ alignSelf: 'center', margin: 20, width: 22, height: 31 }}
                />
            </TouchableOpacity>
            <View style={{ width: 300, alignSelf: 'center' }}
            >
                <DropDownPicker
                    open={open2}
                    onOpen={() => setOpen(false)}
                    value={value2}
                    items={items}
                    setOpen={setOpen2}
                    setValue={setValue2}
                    setItems={setItems}
                    placeholder='Select Target Currency'
                    searchablePlaceholder="Search Currency"
                    searchable={true}
                    listMode="SCROLLVIEW"
                    scrollViewProps={{
                        nestedScrollEnabled: true,
                    }}
                    dropDownContainerStyle={{
                        position: 'relative',
                        top: 0,
                    }}
                    onChangeValue={() => { convert() }}
                />
            </View>
            {value && value2 ?
                <ScrollView style={{ height: 400 }}>
                    <View style={styles.currencyBox1}>
                        <Text style={styles.currencyText1}>1 {value} = {outputCurrencyValue} {value2}</Text>
                    </View>
                    <View style={{ width: 300, alignSelf: 'center', marginVertical: 20 }}>
                        <View style={styles.inputView}>
                            <TextInput
                                keyboardType='numeric'
                                style={styles.TextInput}
                                placeholder="0"
                                value={inputCurrencyValue.toString()}
                                onChangeText={(val) => { setInputCurrencyValue(val); calculate(val) }}
                            />
                            <Text style={styles.currencyLabel}>{value}</Text>
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                keyboardType='numeric'
                                style={styles.TextInput}
                                placeholder="0"
                                value={result.toString()}
                                color='#000'
                                editable={false}
                            />
                            <Text style={styles.currencyLabel}>{value2}</Text>
                        </View>
                    </View>
                </ScrollView>
                : <></>}
            <View>
                <Text style={styles.credits}>Built By Abhinav K.K</Text>
                <Text style={styles.credits2}>Currency Conversion API by currencyapi.com</Text>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    heading: {
        fontFamily: 'Roboto-Bold',
        fontSize: 30,
        textAlign: 'center',
        color: '#000',
        paddingVertical: 20
    },
    currencyBox1: {
        width: 300,
        height: 80,
        alignSelf: 'center',
        backgroundColor: '#EDEDED',
        borderRadius: 20,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5
    },
    currencyText1: {
        textAlign: 'center',
        fontSize: 24,
        marginTop: 20,
        fontWeight: 'bold'
    },
    inputView: {
        backgroundColor: "#EDEDED",
        borderRadius: 30,
        width: "100%",
        height: 45,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
    },
    currencyLabel: {
        position: 'absolute',
        top: 8,
        right: 15,
        fontSize: 20,
    },
    credits: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        color: '#000',
        paddingVertical: 10
    },
    credits2: {
        fontWeight: 'light',
        fontSize: 15,
        textAlign: 'center',
        color: '#000',
        paddingVertical: 5
    }
})