import React from "react";
import Card from "./shared/Card";

function content() {
  return (
    <>
      <Card>
        <div>
          <b>English-Dzongkha</b>
        </div>
        <div className="word-row">
          <div>Pumpkin</div>
          <div className="parts-of-speech">Noun</div>
        </div>
        <div className="word-row">
          <div className="dzoe">Dzongkha Equivalance</div>
          <div className="dzot">ཀ་ཀུ་རུ།</div>
        </div>
        <br />
        <hr />
      </Card>
      <Card>
        <div>
          <b>Dzongkha-Dzongkha </b>
        </div>
        <div className="word-row">
          <div className="dzot">ཀ་ཀུ་རུ།</div>
          <div className="dzoe">Pronunciation</div>
          <div className="dzot">/ཀ་ཀུ་རུ/</div>
          <div className="dzoe">Word Source</div>
          <div className="dzot "> (མིང)(རྫོང)</div>
        </div>

        <div className="word-row">
          <div className="dzot">
            ཨུང་ཐག་བསྣར་ཏེ་བཏགས་མིའི་ཚོད་བསྲེ་བཀྱག་ཧོནམོ་དང་ལི་ཝང་ལ་སོགས་པ་སྦེ་ཡོད་པའི་ཁར་བཟོ་རྣམ་ཡང་སྦོམ་སུ་ཅིག་སྦེ་ཡོད་མི་ཅིག།
          </div>
        </div>
        <div className="word-row">
          <div className="dzoe">Examples</div>
          <div className="dzot">
            ཀ་ཀུ་རུ་འདི་ཚོདམ་སྦེ་ཟ་བཏུབ་པའི་ཁར་ནོར་གྱི་ཆག་སྦེ་ཡང་བྱིན་བཏུབ།
            བཀའ་འགྱུར་བསྟན་འགྱུར་ཐར་ར་ར།། བཀའ་འགྱུར་བསྟན་འགྱུར་ཐར་ར་ར།།
          </div>
        </div>
        <br />
        <hr />
      </Card>
    </>
  );
}

export default content;
