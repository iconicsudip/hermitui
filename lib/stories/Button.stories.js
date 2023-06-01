import HButton from '../components/HButton';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
var meta = {
    title: 'Example/Button',
    component: HButton,
    tags: ['autodocs'],
};
export default meta;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export var Button = {
    args: {
        label: 'Click me',
        type: "success",
        size: "small"
    },
};
//# sourceMappingURL=Button.stories.js.map