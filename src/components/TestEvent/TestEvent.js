import './TestEvent.css';

export function TestEvent() {

    function handleButtonClick() {
        console.log('bouton cliqué');
    }

    function handleButtonDoubleClick() {
        console.log('bouton double cliqué');
    }

    function handleCopy(e) {
        const start = e.target.selectionStart;
        const stop = e.target.selectionEnd;
        e.target.nextElementSibling.value = e.target.value.slice(start, stop)
    }

    function handlePaste(e) {
        e.target.nextElementSibling.value = e.clipboardData.getData('text/plain')
    }

    return (
        <>
            <button onClick={handleButtonClick}>click</button>
            <button onDoubleClick={handleButtonDoubleClick}>double click</button>
            <input type="text" name="test-copy" onCopy={handleCopy} />
            <input type="text" name="test-paste" onPaste={handlePaste} />
            <textarea name="target" id="target" cols="30" rows="10" contentEditable={false} />
        </>
    )
}