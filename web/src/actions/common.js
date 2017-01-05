/**
 * Created by liudonghui on 16/12/23.
 */
import api from '../api'

export const GETTOPICS = 'GETTOPICS';
export const GETTOPICS_PENDING = 'GETTOPICS_PENDING';
export const GETTOPICS_SUCCESS = 'GETTOPICS_SUCCESS';
export const GETTOPICS_ERROR = 'GETTOPICS_ERROR';

export const GETTOPIC = 'GETTOPIC';
export const GETTOPIC_PENDING = 'GETTOPIC_PENDING';
export const GETTOPIC_SUCCESS = 'GETTOPIC_SUCCESS';
export const GETTOPIC_ERROR = 'GETTOPIC_ERROR';

export const GETREPLIES = 'GETREPLIES';
export const GETREPLIES_PENDING = 'GETREPLIES_PENDING';
export const GETREPLIES_SUCCESS = 'GETREPLIES_SUCCESS';
export const GETREPLIES_ERROR = 'GETREPLIES_ERROR';

export function getTopics(options) {
    return {
        type: GETTOPICS,
        payload: {
            promise: api.get('/topics', {
                params: {
                    node_id: (options &&options.node_id) || '',
                    limit: (options &&options.limit) || 20,
                    type: (options &&options.type) || 'last_actived',
                    offset: (options &&options.offset) || 0
                }
            })
        }
    }
}

export function getTopic(id) {
    return {
        type: GETTOPIC,
        payload: {
            promise: api.get(`/topics/${id}`, {
                params: {
                    id: id
                }
            })
        }
    }
}

export function getReplies(id) {
    return {
        type: GETREPLIES,
        payload: {
            promise: api.get(`/topics/${id}/replies`, {
                params: {
                    id: id
                }
            })
        }
    }
}










