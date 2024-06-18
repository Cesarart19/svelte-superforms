<script>
    import { Field, Control, Label, FieldErrors, Description } from "formsnap";
    import { zodClient } from "sveltekit-superforms/adapters";
    import { superForm } from "sveltekit-superforms";
    import { formSchema } from './schema';
    import { Button } from "$lib/components/ui/button";
    import { Switch } from "$lib/components/ui/switch";
  
    const form = superForm({
    title: '',
    skin: 'Default',
    componentsDefaultAspect: 'Opened',
    componentsBehaviorOnClick: 'Leave others components opened',
    configuratorDescription: '',
    activateMultiViews: false,
    activateSaveForLaterOption: false,
    activateSocialShareOption: false
  }, {
    validators: zodClient(formSchema),
  });
  const { form: formData, enhance } = form;
</script>

<form method="POST" use:enhance class="max-w-xl mx-auto p-4 bg-white shadow-md rounded">
  <Field {form} name="title">
    <Control let:attrs class="mb-4">
      <Label class="block text-gray-700 text-sm font-bold mb-2">Title</Label>
      <input {...attrs} bind:value={$formData.title} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </Control>
    <Description class="text-gray-600 text-xs">Enter the title for the configurator.</Description>
    <FieldErrors class="text-red-500 text-xs italic" />
  </Field>

  <Field {form} name="skin">
    <Control let:attrs class="mb-4">
      <Label class="block text-gray-700 text-sm font-bold mb-2">Skin</Label>
      <select {...attrs} bind:value={$formData.skin} class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
        <option value="Default">Default</option>
        <option value="Skin1">Skin1</option>
        <option value="Skin2">Skin2</option>
      </select>
    </Control>
    <Description class="text-gray-600 text-xs">Select the skin type.</Description>
    <FieldErrors class="text-red-500 text-xs italic" />
  </Field>

  <Field {form} name="componentsDefaultAspect">
    <Control let:attrs class="mb-4">
      <Label class="block text-gray-700 text-sm font-bold mb-2">Components Default Aspect</Label>
      <select {...attrs} bind:value={$formData.componentsDefaultAspect} class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
        <option value="Opened">Opened</option>
        <option value="Closed">Closed</option>
      </select>
    </Control>
    <Description class="text-gray-600 text-xs">Select the default aspect of the components.</Description>
    <FieldErrors class="text-red-500 text-xs italic" />
  </Field>

  <Field {form} name="componentsBehaviorOnClick">
    <Control let:attrs class="mb-4">
      <Label class="block text-gray-700 text-sm font-bold mb-2">Components Behavior on Click</Label>
      <select {...attrs} bind:value={$formData.componentsBehaviorOnClick} class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
        <option value="Leave others components opened">Leave others components opened</option>
        <option value="Option2">Option2</option>
      </select>
    </Control>
    <Description class="text-gray-600 text-xs">Select the behavior on click.</Description>
    <FieldErrors class="text-red-500 text-xs italic" />
  </Field>

  <Field {form} name="configuratorDescription">
    <Control let:attrs class="mb-4">
      <Label class="block text-gray-700 text-sm font-bold mb-2">Configurator Description</Label>
      <input {...attrs} bind:value={$formData.configuratorDescription} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </Control>
    <Description class="text-gray-600 text-xs">Provide a description for the configurator.</Description>
    <FieldErrors class="text-red-500 text-xs italic" />
  </Field>

  <Field {form} name="activateMultiViews">
    <Control let:attrs class="mb-4 flex items-center">
      <Label class="block text-gray-700 text-sm font-bold mb-2">Activate Multi Views</Label>
      <Switch bind:checked={$formData.activateMultiViews} />
    </Control>
    <Description class="text-gray-600 text-xs">Enable or disable multi views.</Description>
    <FieldErrors class="text-red-500 text-xs italic" />
  </Field>

  <Field {form} name="activateSaveForLaterOption">
    <Control let:attrs class="mb-4 flex items-center">
      <Label class="block text-gray-700 text-sm font-bold mb-2">Activate Save for Later Option</Label>
      <Switch bind:checked={$formData.activateSaveForLaterOption} />
    </Control>
    <Description class="text-gray-600 text-xs">Enable or disable save for later option.</Description>
    <FieldErrors class="text-red-500 text-xs italic" />
  </Field>

  <Field {form} name="activateSocialShareOption">
    <Control let:attrs class="mb-4 flex items-center">
      <Label class="block text-gray-700 text-sm font-bold mb-2">Activate Social Share Option</Label>
      <Switch bind:checked={$formData.activateSocialShareOption} />
    </Control>
    <Description class="text-gray-600 text-xs">Enable or disable social share option.</Description>
    <FieldErrors class="text-red-500 text-xs italic" />
  </Field>

  <Button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Click me</Button>
</form>