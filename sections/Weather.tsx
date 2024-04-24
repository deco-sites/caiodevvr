import { FnContext, SectionProps } from "deco/mod.ts";
//import type { ImageWidget } from "apps/admin/widgets.ts";
//import Image from "apps/website/components/Image.tsx";
import { Temperature } from "apps/weather/loaders/temperature.ts";

export interface Props {
  /** @title Temperatura */
  temperature: Temperature | null;
}

function Weather({ temperature }: SectionProps<ReturnType<typeof loader>>) {
  return (
    <div class="w-full p-4 lg:p-0 my-24">
      <div class="flex flex-col w-full xl:container px-8 lg:px-14 py-20 z-10 gap-4 lg:gap-10">
        <div class="flex flex-col md:flex-row w-full justify-between items-center">
          <h2 class="w-full md:w-4/5 text-2xl font-bold">
            Produtos adequados para o clima.
          </h2>
          {temperature?.celsius && (
            <div class="flex w-full md:w-1/5 justify-end items-center">
              <h2 class="text-3xl font-bold">{temperature.celsius}°C</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Weather;

export const loader = (props: Props, _req: Request, ctx: FnContext) => {
  return {
    ...props,
    device: ctx.device || "desktop",
  };
};
