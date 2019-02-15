import BasePage from './base-page'

class LandingPage extends BasePage {

    get title() { return $('//h2[@class="projectTitle"]') }

    open() {
        super.open('https://webdriver.io/')
    }

}

export default new LandingPage()