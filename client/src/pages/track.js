import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Layout, QueryResult } from "../components";
import TrackDetail from "../components/track-detail";

export const GET_TRACK = gql`
    query Query($trackId: ID!) {
        track(id: $trackId) {
        id
        title
        thumbnail
        length
        modulesCount
        description
        numberOfViews
        modules {
            id
            title
            length
        }
        description
        author {
            id
            photo
            name
        }
        }
    }
`

const Track = ({trackId}) => {
    //destucture the object returned from the useQuery
    const {loading, error, data} = useQuery(GET_TRACK, {
        variables: { trackId }
    })
    return (
        <Layout>
            <QueryResult error={error} loading={loading} data={data}>
                <TrackDetail track={data?.track}></TrackDetail>
            </QueryResult>
        </Layout>
    );
}

export default Track;