import { useContext  } from 'react';
import EpisodeItem from './EpisodeItem';
import EpisodeContext  from '../context/EpisodeContext';

export default function Episode() {
 const {data}  = useContext(EpisodeContext)
 return (
            <section id='listened' className="flex items-center justify-center  py-[100px] ">
                <div className="max-w-[1024px] w-[90%] mx-auto">
                    <h1 className="text-primary text-4xl font-bold text-center">Eng ko'p tinglangan
<br /> epizodlar</h1>

                    <div className="mt-10 max-w-[100%] overflow-x-auto rounded-lg">
                        <table className="w-fit bg-neutral-800 rounded-lg min-w-[600px] text-center mx-auto overflow-hidden">
                            <thead>
                                <tr className="bg-zinc-700">
                                    <th className="p-3">Guests</th>
                                    <th className="p-3">Date</th>
                                    <th className="p-3">Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(item => {
                                    console.log(item.link);
                                    return <EpisodeItem  key={item.id} title={item.title} date={item.date} link={item.link} />
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>


    )
}
