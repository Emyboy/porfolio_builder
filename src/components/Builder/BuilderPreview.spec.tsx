import BuilderPreview from './BuilderPreview';
import { AllTheProviders, fireEvent, render, screen } from '@test';
import ParagraphMock from '@test/__mocks__/ParagraphWidget.mock';


describe('Testing Builder Preview', () => {
    
    it('should render without crashing', () => {
        render(<BuilderPreview widgets={[]} />);
        expect(screen.getByTestId("builder-preview")).toBeTruthy();
        expect(screen.getByText(/Select Widgets/i)).toBeTruthy();
    });
    
    it('should have the add widget button', () => {
        render(<BuilderPreview widgets={[]} />);
        expect(screen.getByText(/add widget/i)).toBeTruthy();
    });
    
    it('should display 1 widget', () => {
        render(
            <AllTheProviders>
                <BuilderPreview widgets={[ParagraphMock]} />
            </AllTheProviders>,
        );
        const widget_preview = screen.getAllByTestId("each-widget-preview");
        expect(widget_preview).toHaveLength(1);
        expect(screen.getByText(/Paragraph/i)).toBeTruthy();
        screen.debug()
        fireEvent.dblClick(widget_preview[0]);
        screen.getByTestId("widget-nav");
        screen.debug()
    })

});
