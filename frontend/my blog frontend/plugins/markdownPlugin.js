import reactMarkdown from 'react-markdown';

export default function markdownPlugin() {
    return {
        config(config) {
            return {
                ...config,
                plugins: [
                    ...config.plugins,
                    reactMarkdown(),
                ],
            };
        },
    };
}
