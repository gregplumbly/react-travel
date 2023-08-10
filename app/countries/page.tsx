import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Header from "components/Header.tsx";
import Location from "components/Location.tsx";
export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const { data: trips } = await supabase.from("trips").select();

  return (
    <>
      <Header />

      {trips?.map((trip) => (
        <Location data={trip} />
      ))}
    </>
  );
}
