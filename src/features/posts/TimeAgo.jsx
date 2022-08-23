import { formatDistanceToNow, parseISO } from 'date-fns';

import React from 'react';

const TimeAgo = ({ timestamp }) => {
    let timeAgo = '';
    if (timestamp) {
        const date = parseISO(timestamp);
        timeAgo = formatDistanceToNow(date, { addSuffix: true });
    }
    return (
        <span title={timestamp}>
            &nbsp; <i>{timeAgo}</i>
        </span>
    );
};

export default TimeAgo;
