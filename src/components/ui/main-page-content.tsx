import { Separator } from '@/components/ui/separator';

type MainPageContentProps = {
    foo?: string;
};

const MainPageContent = (props: MainPageContentProps) => {
    props.foo;
    return (
        <div className="flex-1">
            <div className="border-b">
                <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                    <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
                        <div className="relative overflow-hidden h-full py-6 pl-8 pr-6 lg:py-8">
                            <p>asdf</p>
                        </div>
                    </aside>
                    <Separator className="-z-50" orientation="vertical" />
                    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]"></main>
                </div>
            </div>
        </div>
    );
};

export default MainPageContent;
