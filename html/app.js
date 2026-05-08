window.addEventListener('message', function(event) {
    if (event.data.action === 'open') {
        document.body.style.display = 'block';
    }

    if (event.data.action === 'close') {
        document.body.style.display = 'none';
    }
});

document.addEventListener('keyup', function(e) {
    if (e.key === 'Escape') {
        fetch(`https://${GetParentResourceName()}/close`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });
    }
});
