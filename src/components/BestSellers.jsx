import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';
import products from "../data/productsList";
import { Cross2Icon } from '@radix-ui/react-icons';
import { StarFilledIcon } from '@radix-ui/react-icons'
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { orangeA } from '@radix-ui/colors';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const toggleGroupItemClasses =`hover:bg-${orangeA} color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-${orangeA} flex h-[35px] w-[35px] items-center justify-center bg-white text-base leading-4 first:rounded-l last:rounded-r focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none`;


const BestSellers = () => {
  // const [selectedSize, setSelectedSize] = useState(products.sizes[2])

  return (
    <>
      <div className='bg-blue-500'>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight text-gray-100">
            Productos más vendidos
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Dialog.Root key={product.id}>
                <Dialog.Trigger asChild>
                  <div className='group'>
                    <div className="mx-w-2xl cursor-pointer mx-4 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                  </div>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="bg-gray-500 opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />
                  <Dialog.Content size="6" className="bg-white data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[660px] translate-x-[-50%] translate-y-[-50%] rounded-[6px]  p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">

                    <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                      <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="sm:col-span-8 lg:col-span-7">
                        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>
                        <section aria-labelledby="information-heading" className="mt-2">
                          <h3 id="information-heading" className="sr-only">
                            Información del Producto
                          </h3>
                          <p className="text-2xl text-gray-900">{product.price}</p>
                          <div className="mt-6">
                            <h4 className='sr-only'>Reviews</h4>
                            <div className='flex items-center'>
                              <div className="flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                  <StarFilledIcon
                                    key={rating}
                                    className={classNames(
                                      product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                      'h-5 w-5 flex-shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                ))}
                              </div>
                              <p className="sr-only">{product.rating} out of 5 stars</p>
                              <a href="#" className="ml-3 text-sm font-medium text-orange-600 hover:text-orange-500">
                                {product.reviewCount} reviews
                              </a>
                            </div>
                          </div>
                        </section>
                        <section aria-labelledby="options-heading" className="mt-11">
                          <h2 id="options-heading" className="sr-only">
                            Product options
                          </h2>
                          <form>
                            <div>
                              <h3 className="text-sm font-medium text-gray-900">Color</h3>
                              <RadioGroup.Root defaultValue="default"
                                aria-label="View density"
                              >
                                <div className="flex items-center space-x-3">
                                  {product.colors.map((color) => (
                                    <RadioGroup.Item
                                      key={color.name}
                                      value={color.name}
                                      className={`${color.class} w-[35px] h-[35px] rounded-full hover:opacity-75 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none
                                    border cursor-default`}
                                    >
                                      <RadioGroup.Indicator className={`flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[35px] after:h-[35px] after:rounded-[100%] after:border-4 after:${color.selectedClass}`} />
                                    </RadioGroup.Item>
                                  ))}
                                </div>
                              </RadioGroup.Root>
                            </div>
                            {/* More options */}

                            {/* necesito arreglar su hover y click por que no se si esta funcionando al 100 */}
                            <div className='mt-10'>
                              <div className='flex items-center justify-between'>
                                <h4 className='text-sm font-medium text-gray-900'>Sizes</h4>
                                <a href="#" className="text-sm font-medium text-orange-600 hover:text-orange-500">
                                  Guias
                                </a>
                              </div>
                              <div className='grid grid-cols-4 gap-4'>
                                {product.sizes.map((size) => (
                                  <ToggleGroup.Root
                                    key={size.name}
                                    className="group relative flex items-center justify-center rounded-md py-3 px-4 bg-white rounded space-x-px border border-gray-200 hover:bg-gray-50 sm:flex-1"
                                    type="single"
                                    defaultValue="s"
                                    disabled={size.inStock ? '' : 'disabled'}
                                    aria-label="size"
                                    >
                                      <ToggleGroup.Item className={toggleGroupItemClasses} value={size.name} aria-label={size.name}>
                                        <span className='py-3 px-4 text-sm font-medium uppercase'>{size.name}</span>
                                      </ToggleGroup.Item>
                                    </ToggleGroup.Root>
                                ))}
                              </div>
                            </div>
                          </form>
                        </section>
                      </div>
                    </div>
                    <Dialog.Close asChild>
                      <button
                        className="text-orange-500 hover:text-white hover:bg-orange-300 focus:shadow-gray-500 absolute
                        top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                        aria-label="Close">
                        <Cross2Icon />
                      </button>
                    </Dialog.Close>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default BestSellers;
