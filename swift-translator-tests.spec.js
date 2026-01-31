const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    // Simple Sentences
    {
      tcId: 'Pos_Fun_001',
      name: 'Simple present tense statement',
      input: 'ammaa kaeema hadhanavaa',
      expected: 'අම්මා කෑම හදනවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_002',
      name: 'Simple food request',
      input: 'thaaththaata koopi oonee',
      expected: 'තාත්තාට කෝපි ඕනේ',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_003',
      name: 'Going class statement',
      input: 'malli panthi yanavaa',
      expected: 'මල්ලි පන්ති යනවා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Compound Sentences
    {
      tcId: 'Pos_Fun_004',
      name: 'Reason-based present tense statement',
      input: 'adha panthi thiyana nisaa mama kalin yanavaa',
      expected: 'අද පන්ති තියන නිසා මම කලින් යනවා',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_005',
      name: 'Contrast sentence (but condition)',
      input: 'eyaa lassanata sindhuva kiyanavaa eth sadhdhe aehenne nae',
      expected: 'එයා ලස්සනට සින්දුව කියනවා එත් සද්දෙ ඇහෙන්නෙ නැ',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'M'
    },
    
    // Complex Sentences
    {
      tcId: 'Pos_Fun_006',
      name: 'Past continuous with contrast',
      input: 'udhee vaessa paayalaa thibunata adha godaak  siithala dhavasak',
      expected: 'උදේ වැස්ස පායලා තිබුනට අද ගොඩාක්  සීතල දවසක්',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'M'
    },
    
    // Questions
    {
      tcId: 'Pos_Fun_007',
      name: 'Simple question about state',
      input: 'oyaa dhaen kohedha inne?',
      expected: 'ඔයා දැන් කොහෙද ඉන්නේ?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_008',
      name: 'Polite question request',
      input: 'mata oyaage putuva dhenavadha?',
      expected: 'මට ඔයාගෙ පුටුව දෙනවද?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_009',
      name: 'Question asking expected arrival time',
      input: 'oyaa kavadhdha mehe ennee?',
      expected: 'ඔයා කවද්ද මෙහෙ එන්නේ?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    
    // Commands
    {
      tcId: 'Pos_Fun_010',
      name: 'Direct command',
      input: 'meheta enna',
      expected: 'මෙහෙට එන්න',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_011',
      name: 'Polite command',
      input: 'karuNaakaralaa mata potha dhenna',
      expected: 'කරුණාකරලා මට පොත දෙන්න',
      category: 'Greeting / request / response',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    
    // Greetings and Responses
    {
      tcId: 'Pos_Fun_012',
      name: 'Morning greeting',
      input: 'suba dhavasak vevaa!',
      expected: 'සුබ දවසක් වෙවා!',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_013',
      name: 'Affirmative response',
      input: 'ov uththaree hari',
      expected: 'ඔව් උත්තරේ හරි',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Tense Variations
    {
      tcId: 'Pos_Fun_014',
      name: 'Past tense action',
      input: 'mama iiye nuvara giyaa',
      expected: 'මම ඊයෙ නුවර ගියා',
      category: 'Daily language usage',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_015',
      name: 'Future tense plan',
      input: 'mama heta nuvara ennam',
      expected: 'මම හෙට නුවර එන්නම්',
      category: 'Daily language usage',
      grammar: 'Future tense',
      length: 'S'
    },
    
    // Negations
    {
      tcId: 'Pos_Fun_016',
      name: 'Simple negation',
      input: 'mata oonee naehae',
      expected: 'මට ඕනේ නැහැ',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_017',
      name: 'Cannot statement',
      input: 'mata baehae kathaa karanna',
      expected: 'මට බැහැ කතා කරන්න',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    
    // Plural and Pronouns
    {
      tcId: 'Pos_Fun_018',
      name: 'Plural pronoun usage',
      input: 'Lamayi godaak innavaa',
      expected: 'ළමයි ගොඩාක් ඉන්නවා',
      category: 'Daily language usage',
      grammar: 'Plural form',
      length: 'S'
    },
    
    // Word Combinations
    {
      tcId: 'Pos_Fun_019',
      name: 'Common phrase pattern',
      input: 'poddak innako mama kaalaa enakam',
      expected: 'පොඩ්ඩක් ඉන්නකො මම කාලා එනකම්',
      category: 'Word combination / phrase pattern',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Mixed Language
    {
      tcId: 'Pos_Fun_020',
      name: 'English brand term embedded',
      input: 'Class eka laga Washroom ekee Lifebuoy naee',
      expected: 'Class එක ලග Washroom එකේ Lifebuoy නෑ',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_021',
      name: 'Place name preservation',
      input: 'chaamika iiyee Colombo aavaa',
      expected: 'චාමික ඊයේ Colombo ආවා',
      category: 'Names / places / common English words',
      grammar: 'Past tense',
      length: 'S'
    },
    
    // Punctuation
    {
      tcId: 'Pos_Fun_022',
      name: 'Exclamation mark handling',
      input: 'eeka nan supiri!',
      expected: 'ඒක නන් සුපිරි!',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Numbers and Formats
    {
      tcId: 'Pos_Fun_023',
      name: 'Currency amount',
      input: 'mata Rs.1,000/- oonee kaeemata',
      expected: 'මට Rs.1,000/- ඕනේ කෑමට',
      category: 'Currency, time formats, dates, and units of measurement',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    // Long Length
    {
      tcId: 'Pos_Fun_024',
      name: 'Long length conversation',
      input: 'magee sahoodharayaa kiyalaa thiyennee api heta udhe 8.00 AM vedhdhi office ekee meeting ekak thiyennee kiyalaa. eyaa WhatsApp ekee message ekak evalaa eeka mata remind karanna kiyalaa. mama eyaata reply ekak dhunnaa, hari mama anivaryenma important documents tika Gmail ekee attach karannam kiyalaa',
      expected: 'මගේ සහෝදරයා කියලා තියෙන්නේ අපි හෙට උදෙ 8.00 AM වෙද්දි office එකේ meeting එකක් තියෙන්නේ කියලා. එයා WhatsApp එකේ message එකක් එවලා ඒක මට remind කරන්න කියලා. මම එයාට reply එකක් දුන්නා, හරි මම අනිවර්යෙන්ම important documents ටික Gmail එකේ attach කරන්නම් කියලා',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'L'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Missing space between words',
      input: 'mamadhaenkannayanavaa',
      expected: 'මම දැන් කන්න යනවා',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Joined compound words',
      input: 'mamahetavaedeekaraladhennam',
      expected: 'මම හෙට වැඩේ කරල දෙන්නම්',
      category: 'Typographical error handling',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Mixed spacing issues',
      input: 'meaka             godak        aeethayi',
      expected: 'මේක ගොඩක් ඈතයි',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Line break in sentence',
      input: 'meeka harima kaethayi\n poddak balanna',
      expected: 'මේක හරිම කැතයි \n පොඩ්ඩක් බලන්න',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Informal slang phrase',
      input: 'machaang uba nan supiriyaakneh',
      expected: 'මචාන්ග් උබ නන් සුපිරියක්නෙ',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Colloquial expression',
      input: 'aadooooo mata enna baee',
      expected: 'අඩෝඕඔ මට එන්න බෑ',
      category: 'Slang / informal language',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'Mixed English with errors',
      input: 'oyaaFacebookhitiyaa',
      expected: 'ඔයා Facebook හිටියා',
      category: 'Mixed Singlish + English',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Abbreviation in sentence',
      input: 'meekata ASAP reply karanna',
      expected: 'මේකට ASAP reply කරන්න',
      category: 'Names / places / common English words',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'Question with spacing error',
      input: 'oyaakaeemakaeevadha?',
      expected: 'ඔයා කෑම කෑවද?',
      category: 'Typographical error handling',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'Complex slang statement',
      input: 'bro mata ara kaeellava set karala dhenna',
      expected: 'bro මට අර කෑල්ලව set කරල දෙන්න',
      category: 'Slang / informal language',
      grammar: 'Imperative (command)',
      length: 'S'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'mama pansalata yanavaa',
    partialInput: 'mama pansa',
    expectedFull: 'මම පන්සලට යනවා',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'S'
  }
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
