import { getNotificationQuery } from '@/services/services';
import { queryOptions, useQuery } from '@tanstack/react-query';
import moment from 'moment';
import React from 'react'

const Notification: React.FC = () => {
    const { data, isPending } = useQuery(
        queryOptions(getNotificationQuery())
    );
    return (
        <div className="w-full h-full  rounded-xl">
            <div className="p-4  border-b border-gray-800/10">
                <h1 className="text-xl  font-semibold text-blue-950/40">
                    Notifications{" "}
                </h1>
            </div>
            {
                isPending && (
                    <div className="flex justify-center items-center h-full">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
                    </div>
                )
            }
            {
                data?.toReversed().map((item: any, index: number) => (
                    <div key={index} className="flex flex-col justify-between p-4 border-b border-gray-800/10">
                        <h1 className="text-xl   text-blue-950/40">{item?.title}</h1>
                        <div className="flex items-center gap-2 ">
                            <h1 className="">{item?.message.split('\n').map((line: string, idx: number) => (
                                <span key={idx}>
                                    {line}
                                    <br />
                                </span>
                            ))}</h1>
                        </div>
                            <p className='text-gray-400 text-xs text-right '>{moment(item?.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Notification