import { useForm } from "react-hook-form";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSettings } from "./useSettings";
import Spinner from "../../ui/Spinner";
import useUpdateSetting from "./useUpdateSetting";

function UpdateSettingsForm() {
  const { isLoading, settings } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();

  function handleUpdateSetting(e, field) {
    const { value } = e.target;

    updateSetting({ [field]: value });
  }

  if (isLoading) return <Spinner />;

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={settings.minBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdateSetting(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={settings.maxBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdateSetting(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={settings.maxGuestsPerBooking}
          disabled={isUpdating}
          onBlur={(e) => handleUpdateSetting(e, "maxGuestsPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={settings.breakfastPrice}
          disabled={isUpdating}
          onBlur={(e) => handleUpdateSetting(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
