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
  
  <form method="POST" use:enhance>
    <Field {form} name="title">
      <Control let:attrs>
        <Label>Title</Label>
        <input {...attrs} bind:value={$formData.title} />
      </Control>
      <Description>Enter the title for the configurator.</Description>
      <FieldErrors />
    </Field>
  
    <Field {form} name="skin">
      <Control let:attrs>
        <Label>Skin</Label>
        <select {...attrs} bind:value={$formData.skin}>
          <option value="Default">Default</option>
          <option value="Skin1">Skin1</option>
          <option value="Skin2">Skin2</option>
        </select>
      </Control>
      <Description>Select the skin type.</Description>
      <FieldErrors />
    </Field>
  
    <Field {form} name="componentsDefaultAspect">
      <Control let:attrs>
        <Label>Components Default Aspect</Label>
        <select {...attrs} bind:value={$formData.componentsDefaultAspect}>
          <option value="Opened">Opened</option>
          <option value="Closed">Closed</option>
        </select>
      </Control>
      <Description>Select the default aspect of the components.</Description>
      <FieldErrors />
    </Field>
  
    <Field {form} name="componentsBehaviorOnClick">
      <Control let:attrs>
        <Label>Components Behavior on Click</Label>
        <select {...attrs} bind:value={$formData.componentsBehaviorOnClick}>
          <option value="Leave others components opened">Leave others components opened</option>
          <option value="Option2">Option2</option>
        </select>
      </Control>
      <Description>Select the behavior on click.</Description>
      <FieldErrors />
    </Field>
  
    <Field {form} name="configuratorDescription">
      <Control let:attrs>
        <Label>Configurator Description</Label>
        <input {...attrs} bind:value={$formData.configuratorDescription} />
      </Control>
      <Description>Provide a description for the configurator.</Description>
      <FieldErrors />
    </Field>
  
    <Field {form} name="activateMultiViews">
      <Control let:attrs>
        <Label>Activate Multi Views</Label>
        <input {...attrs} type="checkbox" bind:checked={$formData.activateMultiViews} />
      </Control>
      <Description>Enable or disable multi views.</Description>
      <FieldErrors />
    </Field>
  
    <Field {form} name="activateSaveForLaterOption">
      <Control let:attrs>
        <Label>Activate Save for Later Option</Label>
        <input {...attrs} type="checkbox" bind:checked={$formData.activateSaveForLaterOption} />
      </Control>
      <Description>Enable or disable save for later option.</Description>
      <FieldErrors />
    </Field>
  
    <Field {form} name="activateSocialShareOption">
      <Control let:attrs>
        <Label>Activate Social Share Option</Label>   <Switch />
        <input {...attrs} type="checkbox" bind:checked={$formData.activateSocialShareOption} />
      </Control>
      <Description>Enable or disable social share option.</Description>
      <FieldErrors />
    </Field>
  </form>
  <Button>Click me</Button>