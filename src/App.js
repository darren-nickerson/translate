import Navbar from "./components/Navbar"
import SelectLanguage from "./components/SelectLanguage"
import {useEffect, useState} from "react"
import {MdOutlineClear} from "react-icons/md"

function App() {
  const [firstLanguage, setFirstLanguage] = useState("")
  const [secondLanguage, setSecondLanguage] = useState(null)
  const [firstLanguageId, setFirstLanguageId] = useState("")
  const [secondLanguageId, setSecondLanguageId] = useState("")
  const [inputText, setInputText] = useState("")
  const [resultText, setResultText] = useState("")

  const onChangeFirstLanguage = value => {
    setFirstLanguage(value)
    setFirstLanguageId(value.value)
  }

  const onChangeSecondLanguage = value => {
    setSecondLanguage(value)
    setSecondLanguageId(value.value)
  }

  const onChangeInputText = e => {
    if (inputText.length < 250) {
      setInputText(e.target.value)
    }
  }

  const url = `https://api.mymemory.translated.net/get?q=${inputText}&langpair=${firstLanguageId}|${secondLanguageId}`

  useEffect(() => {
    if (firstLanguage !== null && secondLanguage !== null && inputText !== "") {
      fetch(url)
        .then(response => response.json())
        .then(data => setResultText(data.responseData.translatedText))
    }
  }, [
    url,
    firstLanguageId,
    secondLanguageId,
    firstLanguage,
    secondLanguage,
    inputText,
  ])

  const clearBox = () => {
    setInputText("")
    setResultText("")
  }

  return (
    <div className="App">
      <Navbar />

      <div className="max-w-4xl h-screen mx-auto text-primary">
        <div className="grid md:grid-cols-2 md:gap-2">
          <div className="px-4 w-full mt-32 md:mt-40">
            <SelectLanguage
              onChange={onChangeFirstLanguage}
              isClearable
            />

            <textarea
              className="form-textarea block w-full h-60 border-[6px] rounded-xl border-[#46a1eb] mt-6 bg-secondary"
              rows="3"
              placeholder={"Enter text"}
              disabled={firstLanguage === null}
              onChange={onChangeInputText}
              value={inputText}
              maxLength="250"
            ></textarea>
            <div className="flex justify-end gap-y-40 px-2">
              <p className="text-right mr-2 mt-4 text-primary">
                Charchacters Left{" "}
                <span className="text-[#46a1eb] font-bold">
                  ({250 - inputText.length})
                </span>
              </p>

              {inputText !== "" && (
                <button
                  className="text-xl  border-2 mt-4 text-primary bg-secondary border-secondary rounded-full"
                  onClick={clearBox}
                >
                  <MdOutlineClear />
                </button>
              )}
            </div>
          </div>

          <div className=" px-4 w-full mt-10 md:mt-40">
            <SelectLanguage
              onChange={onChangeSecondLanguage}
              value={secondLanguage}
              isDisabled={!firstLanguage}

              />

            <textarea
              className="form-textarea mt-6 block w-full bg-secondary mb-4 h-60 border-[6px] rounded-xl border-[#46a1eb] cursor-not-allowed"
              rows="3"
              placeholder={"Your translation"}
              value={resultText}
              readOnly={true}
            ></textarea>
          </div>
        </div>
      </div>
      <div
        className={
          firstLanguage !== null && secondLanguage === null && inputText !== ""
            ? "text-center bg-[#46a1eb] text-white p-4  font-bold w-full flex justify-center fixed bottom-0 shadow-lg"
            : "hidden"
        }
      >
        {firstLanguage !== null && secondLanguage === null && inputText !== ""
          ? "! Select the required languages from dropdown menus"
          : null}
      </div>
    </div>
  )
}

export default App
