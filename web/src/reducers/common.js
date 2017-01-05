/**
 * Created by liudonghui on 16/12/23.
 */
import _ from 'lodash';

import {
    GETTOPICS_PENDING,
    GETTOPICS_SUCCESS,
    GETTOPICS_ERROR,

    GETTOPIC_PENDING,
    GETTOPIC_SUCCESS,
    GETTOPIC_ERROR,

    GETREPLIES_PENDING,
    GETREPLIES_SUCCESS,
    GETREPLIES_ERROR
} from '../actions/common';

const initialState = {
    error: '',
    results: {
        replies: [],
        topics: [],
        topic: {}
    }
};

export default function common(state = initialState, action = {}) {
    switch (action.type) {
        case GETTOPICS_PENDING:
            return Object.assign({}, state, {error: ''});
        case GETTOPICS_SUCCESS:
            return Object.assign({}, state, {error: '', results: {
                ...state.results,
                topics: action.payload.topics
            }});
        case GETTOPICS_ERROR:
            return {
                ...state,
                error: action.payload.error|| action.payload.message
            };

        case GETTOPIC_PENDING:
            return Object.assign({}, state, {error: '', results: {
                ...state.results,
                topic: {}
            }});
        case GETTOPIC_SUCCESS:
            return Object.assign({}, state, {error: '', results: {
                ...state.results,
                topic: action.topic
            }});
        case GETTOPIC_ERROR:
            return {
                ...state,
                error: action.payload.error|| action.payload.message
            };

        case GETREPLIES_PENDING:
            return Object.assign({}, state, {error: '', results: {
                ...state.results,
                replies: []
            }});
        case GETREPLIES_SUCCESS:
            return Object.assign({}, state, {error: '', results: {
                ...state.results,
                replies: action.replies
            }});
        case GETREPLIES_ERROR:
            return {
                ...state,
                error: action.payload.error|| action.payload.message
            };

        default:
            return state;
    }
}
