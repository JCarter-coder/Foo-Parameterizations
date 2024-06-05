import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
})

const paragraphs = lorem.generateParagraphs(3);

const RightContainer = ({}) => {
    //
    return (
        <div id="right-container">
            <div className="card">
                <h2>Supporting Information</h2>
                <div className="card">
                    {paragraphs}
                </div>
            </div>
        </div>
    )
}

export default RightContainer;