const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {year:'numeric', month:'short'};
    return date.toLocaleDateString('en-US', options);
}

export {formatDate};