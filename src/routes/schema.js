import { z } from 'zod';

export const formSchema = z.object({
  title: z.string(),
  skin: z.enum(['Default', 'Skin1', 'Skin2']),
  componentsDefaultAspect: z.enum(['Opened', 'Closed']),
  componentsBehaviorOnClick: z.enum(['Leave others components opened', 'Option2']),
  configuratorDescription: z.string(),
  activateMultiViews: z.boolean(),
  activateSaveForLaterOption: z.boolean(),
  activateSocialShareOption: z.boolean()
});