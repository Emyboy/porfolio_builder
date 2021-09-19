import { render, AllTheProviders } from '@test';
import HeadingTools from './Heading.tools';


describe('Testing Heading Tools', () => {

    it("should render without crashing", () => {
        const component = render(<AllTheProviders>
            <HeadingTools />
        </AllTheProviders>
        );
        expect(component).toBeTruthy()
    })

})


