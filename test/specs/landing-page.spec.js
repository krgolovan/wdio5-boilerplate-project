import LandingPage from '../pages/landing-page'
import Constants from '../../utils/constants'
import { add } from '../../utils/common-utils'

const { PI, E } = Constants

describe('some dummy tests', () => {
    it('test #1', () => {
        LandingPage.open()
        assert.equal(LandingPage.title.getHTML(), '<h2 class="projectTitle">Webdriver <span>I/O</span></h2>')
    })

    it('test #2', () => {
        const result = add(PI, E)
        assert.equal(result, 5.85)
    })
})
