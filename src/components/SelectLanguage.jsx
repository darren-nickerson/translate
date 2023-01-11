import Select from "react-select"

const options = [
  {value: "sq", label: "Albanian"},
  {value: "am", label: " Amharic"},
  {value: "ar", label: " Arabic"},
  {value: "af", label: "Afrikaans"},
  {value: "hy-AM", label: "Armenian"},
  {value: "az-AZ", label: "Azerbaijani"},
  {value: "bjs-BB", label: "Bajan"},
  {value: "rm-RO", label: "Balkan Gipsy"},
  {value: "eu-ES", label: "Basque"},
  {value: "bem-ZM", label: "Bemba"},
  {value: "bn-IN", label: "Bengali"},
  {value: "be-BY", label: "Bielarus"},
  {value: "bi-VU", label: "Bislama"},
  {value: "bs-BA", label: "Bosnian"},
  {value: "br-FR", label: " Breton"},
  {value: "bg-BG", label: "Bulgarian"},
  {value: "my-MM", label: "Burmese"},
  {value: "ca-ES", label: "Catalan"},
  {value: "cb-PH", label: "Cebuano"},
  {value: "ch-GU", label: "Chamorro"},
  {value: "zh-CN", label: "Chinese (Simplified)"},
  {value: "zh-TW", label: "Chinese Traditional"},
  {value: "zdj-KM", label: "Comorian (Ngazidja)"},
  {value: "cop-EG", label: "Coptic"},
  {value: "aig-AG", label: "Creole English (Antigua and Barbuda)"},
  {value: "bah-BS", label: "Creole English (Bahamas)"},
  {value: "gcl-GD", label: "Creole English (Grenadian)"},
  {value: "gyn-GY", label: "Creole English (Guyanese)"},
  {value: "jam-JM", label: "Creole English (Jamaican)"},
  {value: "svc-VC", label: "Creole English (Vincentian)"},
  {value: "vic-US", label: "Creole English (Virgin Islands)"},
  {value: "ht-HT", label: "Creole French (Haitian)"},
  {value: "acf-LC", label: "Creole French (Saint Lucian)"},
  {value: "crs-SC", label: "Creole French (Seselwa)"},
  {value: "pov-GW", label: "Creole Portuguese (Upper Guinea)"},
  {value: "hr-HR", label: "Croatian"},
  {value: "cs-CZ", label: "Czech"},
  {value: "da-DK", label: "Danish"},
  {value: "nl-NL", label: "Dutch"},
  {value: "dz-BT", label: "Dzongkha"},
  {value: "en-GB", label: "English"},
  {value: "eo-EU", label: "Esperanto"},
  {value: "et-EE", label: " Estonian"},
  {value: "fn-FNG", label: " Fanagalo"},
  {value: "fo-FO", label: "Faroese"},
  {value: "fi-FI", label: "Finnish"},
  {value: "fr-FR", label: "French"},
  {value: "gl-ES", label: "Galician"},
  {value: "ka-GE", label: "Georgian"},
  {value: "de-DE", label: "German"},
  {value: "el-GR", label: "Greek"},
  {value: "grc-GR", label: "Greek (Classical)"},
  {value: "gu-IN", label: " Gujarati"},
  {value: "ha-NE", label: "Hausa"},
  {value: "haw-US", label: "Hawaiian"},
  {value: "he-IL", label: "Hebrew"},
  {value: "hi-IN", label: "Hindi"},
  {value: "hu-HU", label: "Hungarian"},
  {value: "is-IS", label: "Icelandic"},
  {value: "id-ID", label: "Indonesian"},
  {value: "kl-GL", label: "Inuktitut (Greenlandic)"},
  {value: "ga-IE", label: " Irish Gaelic"},
  {value: "it-IT", label: "Italian"},
  {value: "ja-JP", label: " Japanese"},
  {value: "jv-ID", label: "Javanese"},
  {value: "kea-CV", label: " Kabuverdianu"},
  {value: "kab-DZ", label: "Kabylian"},
  {value: "kn-IN", label: " Kannada"},
  {value: "kk-KZ", label: "Kazakh"},
  {value: "km-KM", label: "Khmer"},
  {value: "rw-RW", label: "Kinyarwanda"},
  {value: "rn-BI", label: "Kirundi"},
  {value: "ko-KR", label: "Korean"},
  {value: "ku-TR", label: "Kurdish"},
  {value: "ckb-IQ", label: "Kurdish Sorani"},
  {value: "ky-KG", label: "Kyrgyz"},
  {value: "lo-LA", label: "Lao"},
  {value: "la-VA", label: "Latin"},
  {value: "lv-LV", label: "Latvian"},
  {value: "lt-LT", label: "Lithuanian"},
  {value: "lb-LU", label: "Luxembourgish"},
  {value: "mk-MK", label: "Macedonian"},
  {value: "mg-MG", label: "Malagasy"},
  {value: "ms-MY", label: "Malay"},
  {value: "dv-MV", label: "Maldivian"},
  {value: "mt-MT", label: "Maltese"},
  {value: "gv-IM", label: "Manx Gaelic"},
  {value: "mi-NZ", label: "Maori"},
  {value: "mh-MH", label: "Marshallese"},
  {value: "men-SL", label: "Mende"},
  {value: "mn-MN", label: "Mongolian"},
  {value: "mfe-MU", label: "Morisyen"},
  {value: "ne-NP", label: "Nepali"},
  {value: "niu-NU", label: "Niuean"},
  {value: "no-NO", label: "Norwegian"},
  {value: "ny-MW", label: "Nyanja"},
  {value: "ur-PK", label: "Pakistani"},
  {value: "pau-PW", label: "Palauan"},
  {value: "pa-IN", label: "Panjabi"},
  {value: "pap-CW", label: "Papiamentu"},
  {value: "ps-PK", label: "Pashto"},
  {value: "fa-IR", label: "Persian"},
  {value: "pis-SB", label: "Pijin"},
  {value: "pl-PL", label: "Polish"},
  {value: "pt-PT", label: "Portuguese"},
  {value: "pot-US", label: "Potawatomi"},
  {value: "qu-PE", label: "Quechua"},
  {value: "ro-RO", label: "Romanian"},
  {value: "ru-RU", label: "Russian"},
  {value: "sm-WS", label: "Samoan"},
  {value: "sg-CF", label: "Sango"},
  {value: "gd-GB", label: "Scots Gaelic"},
  {value: "sr-RS", label: "Serbian"},
  {value: "sn-ZW", label: "Shona"},
  {value: "si-LK", label: "Sinhala"},
  {value: "sk-SK", label: "Slovak"},
  {value: "sl-SI", label: "Slovenian"},
  {value: "so-SO", label: "Somali"},
  {value: "st-ST", label: "Sotho, Southern"},
  {value: "es-ES", label: "Spanish"},
  {value: "srn-SR", label: "Sranan Tongo"},
  {value: "sw-SZ", label: "Swahili"},
  {value: "sv-SE", label: "Swedish"},
  {value: "de-CH", label: "Swiss German"},
  {value: "syc-TR", label: "Syriac (Aramaic)"},
  {value: "tl-PH", label: "Tagalog"},
  {value: "tg-TJ", label: "Tajik"},
  {value: "tmh-DZ", label: "Tamashek (Tuareg)"},
  {value: "ta-LK", label: "Tamil"},
  {value: "te-IN", label: "Telugu"},
  {value: "tet-TL", label: "Tetum"},
  {value: "th-TH", label: "Thai"},
  {value: "bo-CN", label: "Tibetan"},
  {value: "ti-TI", label: "Tigrinya"},
  {value: "tpi-PG", label: "Tok Pisin"},
  {value: "tkl-TK", label: "Tokelauan"},
  {value: "to-TO", label: "Tongan"},
  {value: "tn-BW", label: "Tswana"},
  {value: "tr-TR", label: "Turkish"},
  {value: "tk-TM", label: "Turkmen"},
  {value: "tvl-TV", label: "Tuvaluan"},
  {value: "uk-UA", label: "Ukrainian"},
  {value: "ppk-ID", label: "Uma"},
  {value: "uz-UZ", label: "Uzbek"},
  {value: "vi-VN", label: "Vietnamese"},
  {value: "wls-WF", label: "Wallisian"},
  {value: "cy-GB", label: "Welsh"},
  {value: "wo-SN", label: "Wolof"},
  {value: "xh-ZA", label: "Xhosa"},
  {value: "yi-YD", label: "Yiddish"},
  {value: "zu-ZA", label: "Zulu"},
]

const styles = {
  option: (styles, state) => ({
    ...styles,
    backgroundColor: state.isSelected ? "#46a1eb " : "",
  }),
}

export default function SelectLanguage({onChange, value, isDisabled}) {
  return (
    <Select
      options={options}
      onChange={onChange}
      value={value}
      className="react-select-container"
      classNamePrefix="react-select"
      styles={styles}
      isDisabled={isDisabled}
      
    />
  )
}